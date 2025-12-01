import 'bootstrap/dist/css/bootstrap.min.css';
import Text from "../General/Text/Text";
import ProductForm from "./ProductForm";

const AdminProductForm = (props) => {
    const { data, setData } = props;
    return (
        <>
            <Text element={'subtitle'} text={'Administrar productos'} />
            
            <div className="container">
                <div className="accordion" id="accordionExample">

                    {/* Agregar productos  */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                                Agregar producto
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <ProductForm action='add' data={data} setData={setData} />
                            </div>
                        </div>
                    </div>

                    {/* Modificar productos  */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Modificar producto
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <ProductForm action='edit' data={data} setData={setData} />
                            </div>
                        </div>
                    </div>
                    
                    {/* Eliminar productos  */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Eliminar producto
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <ProductForm action='delete' data={data} setData={setData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminProductForm;