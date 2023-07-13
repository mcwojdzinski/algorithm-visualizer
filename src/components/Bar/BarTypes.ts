export interface BarProps {
    blocks: number[]
    compare: boolean | (number | null)[] | number
    sorted: boolean | number[]
    swap: false | (number | null)[]
}
