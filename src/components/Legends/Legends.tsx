import { LegendWrapper, SingleLegend, Square } from './LegendsUi.tsx'

const Legends = () => {
    return (
        <LegendWrapper data-testid="legends">
            <SingleLegend>
                <Square compare={true} /> Compare
            </SingleLegend>
            <SingleLegend>
                <Square swap={true} />
                Swap
            </SingleLegend>
            <SingleLegend>
                <Square sorted={true} />
                Sorted
            </SingleLegend>
        </LegendWrapper>
    )
}

export default Legends
