import { Hourglass } from "lucide-react"
const Loader = () => {
    return (
        <div>
            <Hourglass
                visible="true"
                size = "500"
                color="#2563EB"
                aria-label="infinity-spin-loading"
            />
        </div>
    )
}

export default Loader