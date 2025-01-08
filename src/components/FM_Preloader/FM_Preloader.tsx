import { waveform } from "ldrs"

export default function FM_Preloader() {

    waveform.register()

    return (
        <div
            className="fixed h-screen w-screen top-0 left-0 right-0 bottom-0 z-50 bg-myprimary-yellow-60 flex justify-center items-center">
            <l-waveform
                size="35"
                stroke="3.5"
                speed="1"
                color="black"
            />
        </div>
    )
}
