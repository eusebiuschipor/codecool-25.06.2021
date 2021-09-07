import './Header.css';

function Header(props) {
    return (
        <>
            <div>{props.title}</div>
            <ul>
                {props.menu.map(item => 
                    <li key={item.id}>
                        <a href="{item.link}">
                            {item.text}
                        </a>
                    </li>
                )}
            </ul>
        </>
    );
}

export default Header;