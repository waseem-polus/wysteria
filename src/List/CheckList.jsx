import React, { useEffect, useState } from 'react'
import { Container } from '../Container'
import { Toggle } from './Toggle'
import classNames from 'classnames'

export const CheckList = ({children, title = null}) => {
    const [areAllChecked, setAreAllChecked] = useState(false)
    const [checkedCount, setCheckedCount] = useState(0)
    
    const countChecked = () => children.filter(checkbox => checkbox.props.isChecked).length;
    useEffect(() => {
        setCheckedCount(countChecked)
    }, [countChecked()])

    const setAll = (value) => children.forEach(checkbox => checkbox.props.setIsChecked(value))
    
    let parentCheckVariant = classNames({
        'checkbox': checkedCount === 0 || checkedCount === children.length,
        'parent-checkbox': checkedCount > 0 && checkedCount < children.length
    })

    return (
        <Container 
            paddingLft = "none" 
            padding = "md" 
            direction = "column"
        >
            {
                title !== null && 
                    <Toggle 
                        setIsChecked = {setAreAllChecked} 
                        isChecked = {checkedCount > 0}
                        onChange={(value) => setAll(!value)}
                        variant = {parentCheckVariant}
                    >{title}</Toggle>
            }
            
            <Container 
                paddingLft = "xl" 
                padding = "sm" 
                direction = "column"
            >
                {children}
            </Container>
        </Container>
    )
}

export const Check = ({children, setIsChecked, isChecked, onChange = () => {}}) => {
  return (
    <Toggle 
        variant="checkbox" 
        setIsChecked={setIsChecked} 
        isChecked={isChecked} 
        onChange={onChange}
    >
        {children}
    </Toggle>
  )
}
