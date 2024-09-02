
export default function ButtonCTA({href,children}){
    return (
        <a 
            href={href}
            target="_blank"
            type="button" 
            className={`btn btn-warning-light`} rel="noreferrer">
            {children}
        </a>
    );
}