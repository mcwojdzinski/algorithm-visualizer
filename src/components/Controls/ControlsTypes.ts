import React from 'react'

export interface ControlsProps {
    handleLength: React.ChangeEventHandler<HTMLInputElement>
    handleSpeed: React.ChangeEventHandler<HTMLInputElement>
    handleAlgo: React.ChangeEvent<HTMLInputElement>
    generateRandomArray: () => void
    handleSort: () => never
    sorting: boolean
    completed: boolean
    len: number
    speed: number
    algo: string
}
