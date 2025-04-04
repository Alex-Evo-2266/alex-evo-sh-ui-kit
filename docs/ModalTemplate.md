# ModalTemplate

`ModalTemplate` — это базовый компонент модального окна, который управляет его отображением и закрытием.

## Свойства

| Свойство           | Тип                    | Описание                                                                                                        |
| ------------------ | ---------------------- | --------------------------------------------------------------------------------------------------------------- |
| `children`         | `React.ReactNode`      | Контент модального окна.                                                                                        |
| `onHide`           | `() => void` (необяз.) | Колбэк, вызываемый при закрытии модального окна.                                                                |
| `disableBackplate` | `boolean` (необяз.)    | Если `true`, то задний фон (backplate) отключается, и модальное окно не закрывается при клике за его пределами. |

## Использование

```tsx
import { ModalTemplate } from "./ModalTemplate";
import { useState } from "react";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Открыть модальное окно</button>
            {isOpen && (
                <ModalTemplate onHide={() => setIsOpen(false)}>
                    <div className="modal-content">
                        <h2>Пример модального окна</h2>
                        <button onClick={() => setIsOpen(false)}>Закрыть</button>
                    </div>
                </ModalTemplate>
            )}
        </div>
    );
};

export default App;
```

## Описание логики

- **Закрытие модального окна**: вызывается `onHide`, если он передан, при клике по `backplate`.
- **Управление **``: если `disableBackplate === true`, то `backplate` не отображается и не закрывает модальное окно при клике.
