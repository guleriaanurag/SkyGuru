export default function Span({children,...props}){
    return (
        <span className="text-stone-100" {...props}>{children}</span>
    );
}