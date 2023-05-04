import './signup.css'

const SignupComponent = (props: SignupInterface) => {
    const name = props.name
    const inputType = name === "비밀번호" || name === "비밀번호 재확인" ? "password" : "text"
    return (
        <div className="form-label">
            <label htmlFor={name}>{name}
                {props.required ? <span style={{ fontSize: '12px'}}> 필수</span> : null}
                {props.required ? <span style={{ color: 'red', fontSize: '12px'}}>*</span> : null}
            </label><br/>
            <input type={inputType} className="form-input" id={name} name={name} value={props.value} required={props.required} placeholder={props.text + " 입력하세요"}/>
        </div>
    );
};

export default SignupComponent;
type SignupInterface = {
    name: string
    value: string | number
    text?: string
    required?: boolean
}