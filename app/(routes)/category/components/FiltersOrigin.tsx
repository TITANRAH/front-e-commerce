import getProductField from "@/api/getProductField";
import React from "react";
import { FieldTypes } from "@/interfaces/FieldTypes";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@radix-ui/react-radio-group";


interface Props {
  setFilterOrigin: (origin: string) => void;
}


function FilterOrigin(props: Props) {

  const {setFilterOrigin} = props;
  const { result, loading, error } = getProductField();

  

  return (
    <div className="my-5 ">
      <p className="mb-3 font-bold">Origen</p>

      {loading && result == null && <p>Cargando Origen</p>}

      <RadioGroup
      onValueChange={(value) => setFilterOrigin(value)}
      className='mt-5'
      >
        {result !== null &&
          result.data.schema.attributes.origin.enum.map((o) => (
            <div key={o} className="flex items-center mt-2 space-x-5">
              <RadioGroupItem value={o} id={o} />
              <Label htmlFor={o}>{o}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
}

export default FilterOrigin;
