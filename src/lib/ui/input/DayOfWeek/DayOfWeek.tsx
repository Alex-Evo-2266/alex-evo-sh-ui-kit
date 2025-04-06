import { useCallback, useEffect, memo, useState } from "react";
import './DayOfWeek.scss'

export interface IDayOfWeekFieldProps {
    onChange?: (value: string[]) => void;
    value?: string[];
    className?: string;
    dayLabels?: Record<string, string>; // Новый пропс для кастомизации названий
}

const DEFAULT_DAY_LABELS = {
    Mon: 'Mon',
    Tue: 'Tue',
    Wed: 'Wed',
    Thu: 'Thu',
    Fri: 'Fri',
    Sat: 'Sat',
    Sun: 'Sun'
};

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;

export const DayOfWeekField = memo(({ 
    onChange, 
    value, 
    className,
    dayLabels = DEFAULT_DAY_LABELS // Дефолтные значения
}: IDayOfWeekFieldProps) => {
    const [selectedDays, setSelectedDays] = useState<string[]>(value ?? []);

    useEffect(() => {
        if(value)
            setSelectedDays(value);
    }, [value]);

    const handleDayChange = useCallback((day: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDays(prevDays => {
            const newDays = e.target.checked
                ? [...prevDays, day]
                : prevDays.filter(d => d !== day);
            
            onChange?.(newDays);
            return newDays;
        });
    }, [onChange]);

    const isDayChecked = useCallback((day: string) => {
        return selectedDays.includes(day);
    }, [selectedDays]);

    return (
        <div className={`days-week-field-container ${className}`}>
            {DAYS_OF_WEEK.map(day => (
                <label key={day} className="day-of-week-label">
                    <input 
                        type="checkbox" 
                        onChange={handleDayChange(day)} 
                        checked={isDayChecked(day)}
                        aria-label={dayLabels[day] || day} // Используем кастомное название для accessibility
                    />
                    <span>{dayLabels[day] || day}</span> {/* Отображаем кастомное название */}
                </label>
            ))}
        </div>
    );
});

DayOfWeekField.displayName = 'DayOfWeekField';