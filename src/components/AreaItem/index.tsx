export interface AreaItemInterface {
    title: string;
}

export default function AreaItem(props: AreaItemInterface) {
    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
        </div>
    );
}