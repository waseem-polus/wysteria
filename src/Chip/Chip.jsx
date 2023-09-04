import React from 'react'
import { InputButton } from '../InputField/InputField'
import { Container } from '../Container'
import { Icon } from '../Icon'
import classNames from 'classnames'

import './Chip.css'

export const ChipField = ({children}) => {
    return (
        <Container gap = 'xs' padding='xs' style={{flexWrap: 'wrap'}}>{children}</Container>
    )
}

export const Chip = ({
    children, 
    removable = false, 
    onRemove = () => {}, 
    color = "neutral", 
    icon =  null, 
    fontCase = "none"
}) => {
    let backgroundColor = classNames({
        '--wui-color-base-300': color === "neutral",
        '--wui-color-accent-50': color === "primary",
    })

    let strokeColor = classNames({
        '--wui-color-black': color === "neutral",
        '--wui-color-accent-700': color === "primary",
    })
    
    let labelClass = classNames(
        'chip__label',
        {
            'chip__label--primary' : color === "primary"
        }
    )
    
    const containerStyle = {
        borderRadius: '5rem',
        backgroundColor: `var(${backgroundColor})`,
        textTransform: fontCase,
    }

    return (
        <Container 
            paddingVer='sm' 
            paddingHor="md" 
            gap="sm" 
            align='center'

            style={containerStyle}
        >
            <Icon name = {icon} size={16} color={`var(${strokeColor})`}></Icon>
            <label className={labelClass}>{children}</label>

            {
                removable && 
                <InputButton 
                    icon={<Icon name = "X" size={16}></Icon>} 
                    onClick={onRemove}
                ></InputButton>
            }
        </Container>
    )
}
