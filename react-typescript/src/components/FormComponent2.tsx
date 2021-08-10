import { useForm } from '../hooks/useForm';

interface formPersona {
    nombre: string;
    apellido: string;
}

export const FormComponent2 = () => {
    const {form, handleChange} = useForm<formPersona>({
        nombre:'nombre1',
        apellido:'apellido1'
    });
    /*
    const [form, setForm] = useState<Iform>(formInicial)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name);
        console.log(e.target.value);
        
        
        setForm({
            ...form, //operador de propagación
            [ e.target.name ]: e.target.value
        })
    }
    */

    return (
        <div className="container">
            <div className="row m-3">
                <form>
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="text"
                        name="nombre"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                        value={form.nombre}
                        onChange={(e) => handleChange(e) /*es lo mismo que {handleChange}*/}/>
                        <small id="emailHelp" className="form-text text-muted">no es un campo mail, es text con fines educativos(?)</small>
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="text"
                        name="apellido"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={form.apellido}
                        onChange={handleChange /*es lo mismo que {(e) => handleChange(e)}*/}/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>

                <pre> {JSON.stringify(form)} </pre>
            </div>
        </div>
    )
}