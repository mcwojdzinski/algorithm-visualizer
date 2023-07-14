import React from 'react'

export interface ControlsProps {
    handleLength: React.ChangeEventHandler<HTMLInputElement>
    handleSpeed: React.ChangeEventHandler<HTMLInputElement>
    handleAlgo: React.ChangeEventHandler<HTMLSelectElement>
    generateRandomArray: () => void
    handleSort: () => void
    handleStop: () => void
    sorting: boolean
    completed: boolean
    len: number
    speed: number
    algo: string
}

export interface ButtonTypeProps {
    warning?: boolean
}
