export default () => {
    return (
        <div className="flex h-[100%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className="m-auto"
                src={`https://vps.tttm.us/clock?timestamp=${Date.now() / 1000}`}
                alt="Unable to load clock -- my ssl certificate probably expired ://"
            />
        </div>
    )
}