import { useState } from "react";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useAddProduct } from "./useAddProduct";

const StyledSelect = styled.select`
  border-radius: 5px;
  padding: 5px;
`;

function FormAddProduct() {
  const { register, handleSubmit } = useForm();
  const [type, setType] = useState(1);

  const { mutate } = useAddProduct();

  function onSubmit(data) {
    data.type = type;
    data.dimension = `${data.height}x${data.width}x${data.length}`;
    mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="NAME">
        <Input type="text" id="name" {...register("name")} />
      </FormRow>
      <FormRow label="SKU">
        <Input type="text" id="sku" {...register("sku")} />
      </FormRow>
      <FormRow label="Price">
        <Input type="text" id="price" {...register("price")} />
      </FormRow>
      <FormRow>
        <StyledSelect
          required
          name="type"
          id="productType"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option disabled>chosse a type</option>
          <option value={1}>Furniture</option>
          <option value={2}>Book</option>
          <option value={3}>Disc</option>
        </StyledSelect>
      </FormRow>
      {+type === 1 && (
        <>
          <FormRow label="Height">
            <Input type="number" id="height" {...register("height")} />
          </FormRow>
          <FormRow label="width">
            <Input type="number" id="width" {...register("width")} />
          </FormRow>
          <FormRow label="length">
            <Input type="number" id="length" {...register("length")} />
          </FormRow>
        </>
      )}
      {+type === 2 && (
        <FormRow label="weight">
          <Input type="number" id="weight" {...register("weight")} />
        </FormRow>
      )}
      {+type === 3 && (
        <FormRow label="size">
          <Input type="number" id="size" {...register("size")} />
        </FormRow>
      )}
      <button>submit</button>
    </form>
  );
}

export default FormAddProduct;
