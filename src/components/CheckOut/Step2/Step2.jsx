import React, { useState } from 'react';

import {
  FormContainer,
  Legend,
  Label,
  SubLabel,
  Input,
  DeliveryBtn,
  PostContainer,
  TextAreaLabel,
  TextArea,
} from './Step2.styled';
import DeliveryNP from 'components/Delivery/DeliveryNP';
import DeliveryUP from 'components/Delivery/DeliveryUP';
// import { useTranslation } from 'react-i18next';

const Step2 = () => {
  // const { t } = useTranslation();
  const [novaPoshta, setNovaPoshta] = useState(false);
  const [ukrPoshta, setUkrPoshta] = useState(false);
  const [other, setOther] = useState(false);

  const [department, setDepartment] = useState(false);
  const [courier, setСourier] = useState(false);
  const [postAdress, setPostAdress] = useState(false);

  const handleChangeDelivery = e => {
    switch (e.target.value) {
      case 'novaPoshta':
        setNovaPoshta(true);
        setUkrPoshta(false);
        setOther(false);
        break;
      case 'ukrPoshta':
        setNovaPoshta(false);
        setUkrPoshta(true);
        setOther(false);
        break;
      case 'other':
        setNovaPoshta(false);
        setUkrPoshta(false);
        setOther(true);
        break;
      default:
        break;
    }
  };

  const handleChangePost = e => {
    switch (e.target.value) {
      case 'department':
        setDepartment(true);
        setСourier(false);
        break;
      case 'courier':
        setDepartment(false);
        setСourier(true);
        break;
      default:
        break;
    }
  };

  console.log(postAdress, 'postAdress');
  return (
    <FormContainer>
      <form>
        <PostContainer>
          <div>
            <Legend>Delivery</Legend>
            <Label>
              <Input
                type="radio"
                name="delivery"
                value="novaPoshta"
                checked={novaPoshta}
                onChange={e => handleChangeDelivery(e)}
              />
              Nova Poshta
            </Label>
            {novaPoshta && (
              <div
                style={{
                  paddingLeft: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <SubLabel>
                  <Input
                    type="radio"
                    name="post"
                    value="department"
                    checked={department}
                    onChange={e => handleChangePost(e)}
                  />
                  To department
                </SubLabel>
                <DeliveryNP novaPoshta={novaPoshta} department={department} />
                <SubLabel>
                  <Input
                    type="radio"
                    name="post"
                    value="courier"
                    checked={courier}
                    onChange={e => handleChangePost(e)}
                  />
                  Сourier
                </SubLabel>
                {novaPoshta && courier && (
                  <TextAreaLabel>
                    Edit your post adress:
                    <TextArea
                      name="postAdress"
                      rows={4}
                      cols={40}
                      onChange={e => setPostAdress(e.target.value)}
                    />
                  </TextAreaLabel>
                )}
              </div>
            )}
            <br />
            <Label>
              <Input
                type="radio"
                name="delivery"
                value="ukrPoshta"
                checked={ukrPoshta}
                onChange={e => handleChangeDelivery(e)}
              />
              UkrPoshta
            </Label>
            {ukrPoshta && (
              <div style={{ paddingLeft: '30px' }}>
                <SubLabel>
                  <Input
                    type="radio"
                    name="post"
                    value="department"
                    checked={department}
                    onChange={e => handleChangePost(e)}
                  />
                  To department
                </SubLabel>
                <DeliveryUP ukrPoshta={ukrPoshta} department={department} />
              </div>
            )}
            <br />
            <Label>
              <Input
                type="radio"
                name="delivery"
                value="other"
                checked={other}
                onChange={e => handleChangeDelivery(e)}
              />
              Other Delivery Service
            </Label>
            {other && (
              <TextAreaLabel>
                Add your Delivery service:
                <TextArea
                  name="postAdress"
                  rows={4}
                  cols={40}
                  onChange={e => setPostAdress(e.target.value)}
                />
              </TextAreaLabel>
            )}
          </div>
        </PostContainer>
        <DeliveryBtn type="submit">Choose way of delivery</DeliveryBtn>
      </form>
    </FormContainer>
  );
};

export default Step2;
