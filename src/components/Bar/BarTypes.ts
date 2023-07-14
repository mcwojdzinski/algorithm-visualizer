export interface BarProps {
    blocks: number[]
    compare: [number, number] | null | false | (number | null)[]
    sorted: number[] | null
    swap: [number, number] | null | false | (number | null)[]
}
