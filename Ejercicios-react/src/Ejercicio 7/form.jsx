import {Field, Formik, Form, ErrorMessage} from "formik";
import './form.css'

const Appform = () => {
    return (
        <Formik
        initialValues={{message: ""}}
        validate={values => {
            let errors = {}
            if(!values.name){
                errors.name = "Este campo es requerido";
            } else if(!values.email){
                errors.email = "Este campo es requerido";
            }else if(
                !/\S+@\S+\.\S+/.test(values.email)
                ){
                errors.email = "El correo no es válido";
            }
                return errors
            }}
            onSubmit={
                (values, {setSubmitting})=>{
                    let URL = "https://formspree.io/f/xvonqnyb";
                    let formData = new FormData();
                    formData.append("name", values.name);
                    formData.append("email", values.email);
                    formData.append("message", values.message);

                    fetch(URL,{
                        method: "POST",
                        body: formData,
                        headers: {
                            "Accept": "aplication/json"
                        }
                    }).then(response => {
                        if(response.ok)
                        setSubmitting(false);
                        alert("Gracias por contactarme, te responderé a la brevedad posible...")
                        })
                    }
                }
   >   
            {
                ({ isSubmitting, values}) => (
                    <>
                    <section className="contact">
                    <h2>Contact me</h2>
                    <Form className="form">
                        <div className="input">
                            <label htmlFor='name'>Nombre:</label>
                            <Field type="text" className="input" name="name"></Field>
                            <ErrorMessage name="name" className="errorMessage" component="p"/>
                        </div>
                        <div className="input">
                            <label autoComplete="off" htmlFor='email'>Correo electrónico:</label>
                            <Field type="email" className="input" name="email"></Field>
                            <ErrorMessage name="email" className="errorMessage" component="p"/>
                        </div>
                        <div className="input">
                            <label htmlFor='message'>Mensaje</label>
                            <Field component="textarea" className="textarea input"  placeholder={values.message} name="message"></Field>
                        </div>
                        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Enviando..." : "Enviar Mensaje"}</button>
                    
                    </Form>
                    </section>
                    </>
                )
            }
        </Formik>
    );
}

export default Appform;
