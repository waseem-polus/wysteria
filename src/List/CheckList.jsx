import React, { forwardRef, useEffect, useId, useImperativeHandle, useRef, useState } from 'react'
import { Container } from '../Container'
import { Toggle } from './Toggle'

const mapGetOrInitialize = (map, setMap, key, value) => {
    if (!(("" + key) in map)) {
        setMap({...map, ["" + key]: value})
    }

    return map["" + key]
}

export const CheckList = ({
    children, 
    disabled = false, 
    title = null, 
    group = useId()
}) => {
    const [selectedCount, setSelectedCount] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const [selection, setSelection] = useState({})
    const [childrenProps, setChildrenProps] = useState([])
    
    const updateSelection = (key, value) => {
        setSelection((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    }
    
    useEffect(() => {
        setTotalCount(Object.keys(selection).length)
        setSelectedCount(Object.values(selection).filter(checked => checked).length)
    }, [selection])

    useEffect(() => {
        console.log(selection)
        console.log(`All selected (${selectedCount} / ${totalCount})? ${selectedCount === totalCount && totalCount > 0}`)
        console.log(`Any selected (${selectedCount} / ${totalCount})? ${selectedCount > 0}`)
        console.log("==========")
    }, [selectedCount])

    useEffect(() => {
        setChildrenProps(children.map((child, index) => {
            if (child.type.name === "Check") {
                updateSelection(`${index}`, false)

                return (
                    <Check
                        {...child.props}

                        key = {index} 
                        group = {group}

                        checked = {child.props.checked || selection[`${index}`]}
                        onChange = {(e) => {
                            updateSelection(`${index}`, e.target.checked)

                            if (child.props.hasOwnProperty('onChange')) {
                                child.props.onChange(e)
                            }
                        }}

                        disabled = {child.props.disabled || disabled}
                    ></Check>
                )
            } else if (child.type.name === "CheckList") {
                return (
                    <SubList 
                        key = {index}

                        child = {child}
                        index = {index}

                        group = {group} 
                        selection = {selection} 
                        updateSelection = {updateSelection} 
                        disabled = {disabled}
                    ></SubList>
                )
            }
        }))
    }, [children])

    return (
        <>
            {title !== null && <p>{title}</p>}
            <Container
                padding = "none"
                gap = "md"
                direction = "column"
            >
                <fieldset>{childrenProps}</fieldset>
            </Container>
        </>
    )
}

const SubList = ({child, index, group, selection, updateSelection, disabled}) => {
    return (
        <>
            <ParentCheck
                group = {group} 

                checked = {selection[`${index}`]}
                onChange={(e) => {
                    updateSelection(`${index}`, e.target.checked)
                    console.log(selection[`${index}`])
                }}

                disabled = {child.props.disabled || disabled}
            >{child.props.title}</ParentCheck>
            <CheckList
                {...child.props}

                title = {null}
            ></CheckList>
        </>
    )
}

export const Check = ({
    children, 
    group, 
    checked = false, 
    disabled = false, 
    onChange = () => {}
}) => {
    return (
        <Toggle 
            variant = "checkbox"
            group = {group}
            checked = {checked} 
            disabled = {disabled}
            onChange = {onChange}
        >{children}</Toggle>
    )
}

const ParentCheck = ({
    children, 
    group, 
    parent = true,
    checked = false, 
    disabled = false, 
    onChange = () => {}
}) => {
    return (
        <Toggle 
            variant = "checkbox"
            parent = {parent}
            group = {group}
            checked = {checked} 
            disabled = {disabled}
            onChange = {onChange}
        >{children}</Toggle>
    )
}