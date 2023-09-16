import styles from  './InputFatec.module.css'
interface Props{
    type: 'checkbox' | 'color'| 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
    placeholder: string
    value: string
} 

function InputFatec({type, placeholder, value}:Props){
    return(
        <div>
            <input className={styles.inputFatec} type={type} placeholder={placeholder} value={value}/>
        </div>
    )
}
export default InputFatec