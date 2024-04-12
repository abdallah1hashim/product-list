import { useState } from "react";
import FormAddProduct from "../Features/add-product/FormAddProduct";
import { useAddProduct } from "../Features/add-product/useAddProduct";
import Button from "../ui/Button";
import Header from "../ui/Header";
import Main from "../ui/Main";
import PageLayout from "../ui/PageLayout";
import Row from "../ui/Row";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const P = styled.p`
  text-align: center;
  width: 100%;
  font-weight: 600;
  color: var(--color-red-700);
`;

function AddPRoduct() {
  const { register, handleSubmit, formState } = useForm();
  const [type, setType] = useState(1);

  const { mutate, error } = useAddProduct();
  const errMsg = error?.response.data.message;

  function onSubmit(data) {
    if (!data.name || !data.sku || !data.price) return;
    data.type = +type;

    if (+data.type === 1)
      data.value = `${data.height}x${data.width}x${data.length}`;
    if (+data.type === 2) data.value = data.weight;
    if (+data.type === 3) data.value = data.size;
    mutate(data);
  }

  function onError(errors) {}

  return (
    <PageLayout
      type="form"
      id="product_form"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <Header>
        <h1>Add Product</h1>
        <Row>
          <Button type="submit">Save</Button>
          <Button to="/">Cancel</Button>
        </Row>
      </Header>
      <Main>
        {errMsg && (
          <Row>
            <P className="Invalid_Input">{errMsg}</P>
          </Row>
        )}
        <FormAddProduct
          register={register}
          type={type}
          setType={setType}
          formState={formState}
        />
      </Main>
    </PageLayout>
  );
}

export default AddPRoduct;
