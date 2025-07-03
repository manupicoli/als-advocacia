export interface AboutItemInterface {
    text: string;
}

export default function AboutItem(props: AboutItemInterface) {
    return (
        <div className="w-full max-w-lg text-gray-800 p-10 rounded-sm shadow-md">
            <p className="text-lg mb-4 text-justify">
              {props.text}
            </p>
        </div>
    );
}