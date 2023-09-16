import styles from './ButtonFatec.module.css'

//definindo as propriedade de atributos que nosso botao tera
interface Props{
    type: 'button'|'submit'|'reset'
    label: string
}

//({type, label}:Props) - Passando o tipo de propriedade necessaria
//ou poderia ser Props...
function ButtonFatec({type, label}:Props){
    return(
        /**Pasando as propriedades */
        <button className={styles.botaoFatec} type={type}>{label}</button>
    )
}

export default ButtonFatec