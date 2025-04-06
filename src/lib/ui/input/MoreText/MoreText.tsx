import { Button, Chips, TextField } from '../../..'
import { joinValue, splitValue } from '../../../helpers/stringSplitAndJoin'
import { IMoreTextProps } from '../props'
import './MoreText.scss'
import { useCallback, useEffect, useState } from 'react'

/**
 * Компонент для добавления нескольких текстовых значений в виде чипсов 
 * с возможностью их удаления. Значения хранятся как объединенная строка,
 * но отображаются как отдельные элементы.
 */
export const MoreText = ({
  minWidth,
  value,
  onChange,
  border = false,
  placeholder = 'Добавить значение',
  addButtonLabel = 'Добавить',
  separator = ',',
  disabled = false,
  className,
  ariaLabel = 'Добавление нового элемента',
  chipsAriaLabel = 'Список элементов',
  id,
  error,
  errorText,
  helperText
}: IMoreTextProps) => {
  const [values, setValues] = useState<string[]>([])
  const [newValue, setNewValue] = useState<string>('')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Разбиваем начальное значение на массив при изменении value или разделителя
  useEffect(() => {
    setValues(splitValue(value, separator))
  }, [value, separator])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Обработка нажатия Enter для добавления значения
    if (e.key === 'Enter') {
      e.preventDefault()
      addValue()
    }
  }

  const addValue = useCallback(() => {
    // Не добавляем пустые или повторяющиеся значения
    if (newValue.trim() === '' || values.includes(newValue.trim())) {
      return
    }
    const data = [...values, newValue.trim()]
    setValues(data)
    onChange?.(joinValue(data, separator))
    setNewValue('')
    // Устанавливаем фокус на новый добавленный элемент
    setActiveIndex(data.length - 1)
  }, [values, newValue, onChange, separator])

  const deleteValue = (id: number) => {
    const data = values.filter((_, index) => index !== id)
    setValues(data)
    onChange?.(joinValue(data, separator))
    // После удаления фокусируемся на предыдущем элементе или на поле ввода
    setActiveIndex(id > 0 ? id - 1 : null)
  }

  return (
    <div 
      className={`more-text ${className ?? ""}`} 
      style={{ minWidth: minWidth }}
      id={id} // ID для ARIA-связей
    >
      <div className='add-value'>
        <TextField
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={newValue}
          border={border}
          placeholder={placeholder}
          error={error}
          errorText={errorText}
          helperText={helperText}
          disabled={disabled}
          aria-label={ariaLabel} // Метка для скринридеров
          aria-describedby={id ? `${id}-help` : undefined} // Связь с подсказкой
        />
      </div>
      
      {/* Контейнер с динамически меняющимся содержимым */}
      <div 
        className='more-text-controll'
        aria-live="polite" // Позволяет скринридерам объявлять изменения
      >
        {/* Контейнер чипсов - семантически обозначен как listbox */}
        <div 
          className='chips-container'
          role="listbox" // Роль для списка выбираемых элементов
          aria-label={chipsAriaLabel} // Описание списка
          aria-multiselectable="false" // Разрешаем выбор только одного элемента
        >
          {values.map((item, index) => (
            <Chips
              key={`${item}-${index}`}
              text={item}
              onDelete={() => deleteValue(index)}
              disabled={disabled}
              aria-label={`Элемент: ${item}`} // Описание элемента
              aria-selected={activeIndex === index} // Выделен ли элемент
              role="option" // Роль элемента списка
              tabIndex={0} // Делаем элемент фокусируемым
              onFocus={() => setActiveIndex(index)} // Отслеживаем активный элемент
            />
          ))}
        </div>
        
        <div>
          <Button 
            onClick={addValue} 
            className='more-text-btn'
            disabled={disabled || !newValue.trim()}
            aria-label={`${addButtonLabel} элемент`} // Уточняем действие кнопки
          >
            {addButtonLabel}
          </Button>
        </div>
      </div>
      
      {/* Скрытая подсказка для скринридеров */}
      {id && (
        <div id={`${id}-help`} className="sr-only">
          Добавляйте элементы, вводя текст и нажимая Enter или кнопку "Добавить"
        </div>
      )}
    </div>
  )
}