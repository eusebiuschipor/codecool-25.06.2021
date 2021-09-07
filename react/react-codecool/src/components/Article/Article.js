import Image from '../Image/Image.js';
import Title from '../Title/Title.js';

function Article(props) {
    return (
       <article>
            <Image />
            <Title data={props.title} color={props.color} background={props.background} />
            {props.paragraph}
            <hr />
       </article>
    );
}

export default Article;