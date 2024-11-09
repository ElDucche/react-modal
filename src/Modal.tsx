import { useEffect, useState } from "react"
import * as React from 'react'
import clsx from "clsx"

interface ModalProps {
    state: boolean
    children: React.ReactNode
    className?: string
}

const reloadForm = () => {
    if (document.querySelectorAll('form')) {
        document.querySelectorAll('form').forEach((form: HTMLFormElement) => {
            form.reset()
        })
    }
}

export const Modal = ({state, children, className}: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(state)
    }, [state])

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    document.addEventListener('click', (e) => {
        if (e.target !== document.getElementById('modal') && !document.getElementById('modal')?.contains(e.target as Node)) {
            handleCloseModal()
        }
    })
    
    return (
        <div className={`fixed inset-0 bg-white/50 backdrop-blur-sm z-50 ${isOpen ? "block" : "hidden"} grid place-content-center place-items-center`}>
            <div className={clsx("transform -translate-x-1/2 -translate-y-1/2", className)} id='modal'>
                {children}
            </div>
        </div>
    )
}