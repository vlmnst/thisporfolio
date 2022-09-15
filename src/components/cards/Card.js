import './Card.scss'

const Card = ({target, yellow}) => {
    return(
        <div className={target} style={ yellow? { width: '80%'}:{ width: '23%'} }>
        
        </div>
    )
}
export default Card;