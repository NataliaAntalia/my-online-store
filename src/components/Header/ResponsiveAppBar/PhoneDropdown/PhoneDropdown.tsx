import {Box} from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import s from '../PhoneDropdown/PhoneDropdown.module.css';
import React from 'react';

// Интерфейс остался без изменений
interface PhoneDropdownProps {
    mainNumber: string,
    otherNumbers: string[];
    workingHours: string;
}

export const PhoneDropdown = ({mainNumber, otherNumbers, workingHours}: PhoneDropdownProps) => {
    // Используем состояние для отслеживания открытия/закрытия
    const [isOpen, setIsOpen] = React.useState(false);

    // Ссылка (ref) для контейнера, нужна для отслеживания клика вне меню
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Функция-переключатель для открытия/закрытия по клику
    const handleToggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    // Функция для закрытия меню (используется при выборе номера)
    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    // Хук для обработки клика вне меню
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Если клик был вне нашего контейнера И меню открыто, закрываем его
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // Добавляем слушатель событий на весь документ
        document.addEventListener("mousedown", handleClickOutside);

        // Очистка: удаляем слушатель при размонтировании компонента
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]); // Перезапускаем эффект, если состояние isOpen изменилось


    return (
        <Box
            className={s.userMenuContainer}
            ref={containerRef} // Привязываем ref к контейнеру
            // onMouseEnter и onMouseLeave УДАЛЕНЫ
        >
            <Button
                className={s.mainNumberButton}
                // Добавляем обработчик onClick, который переключает меню
                onClick={handleToggleMenu}
                endIcon={<ArrowDropDownIcon className={`${s.dropdownIcon} ${isOpen ? s.rotated : ''}`}/>}
            >
                <CallIcon className={s.callIcon}/>
                {mainNumber}
            </Button>

            <Box
                // Используем новое состояние `isOpen` для применения класса `show`
                className={`${s.dropdownMenu} ${isOpen ? s.show : ''}`}
            >
                {otherNumbers.map((number, index) => (
                    <Box
                        key={index}
                        className={s.additionalNumber}
                        // Закрываем меню при клике на дополнительный номер
                        onClick={handleCloseMenu}
                    >
                        <Typography>{number}</Typography>
                    </Box>
                ))}

                <Box className={s.divider}/>

                <Box className={s.workingHours}>
                    <Typography variant="body2" >
                        {workingHours}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};