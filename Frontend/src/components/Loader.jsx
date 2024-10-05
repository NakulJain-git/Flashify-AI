import { Hourglass } from "lucide-react"
const Loader = () => {
    return (
        <div>
            <Hourglass
                visible="true"
                width="200"
                color="#2563EB"
                aria-label="infinity-spin-loading"
            />
        </div>
    )
}

export default Loader