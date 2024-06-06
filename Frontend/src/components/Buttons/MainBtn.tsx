type propsType = {
    text: string,
    className: string
}
export default function MainBtn(props: propsType) {
    return (
        <div className={`inline-block  rounded-lg px-3 py-1.5 text-gray-400 cursor-pointer ${props.className}`}>
          {props.text}
        </div>
    )
}
