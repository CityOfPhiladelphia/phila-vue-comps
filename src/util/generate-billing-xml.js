import { format } from 'date-fns';
import escapeHtml from 'escape-html';

/*
  this is a helper fn that accepts a data object containing the following:

    - accountNum <String>
    - amountDue <Number>
    - owner <String>
    - address <Object>
      - streetAddress <String>
      - city <String>
      - state <String>
      - postalCode <String>
      - country <String>

  and returns a serialized xml object which the epay gateway can accept for
  initiating a purchase.

  REVIEW does this need to handle credits?
*/

export default function (data) {
  console.log('generate billing xml', data);

  // if data object is empty, return empty string
  if (Object.keys(data).length < 1) {
    return '';
  }

  // get the current date/time in iso format with timezone
  let timestamp = format(new Date(), 'YYYY-MM-DDTHH:mm:ssZ');

  // TODO use a json to xml lib instead of forming this string?
  const xmlString = `<?xml version="1.0" encoding="utf-16"?>
<BillingStatement xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <ApplicationID>fcd68fd2-e923-4b03-a0e7-a678c2ed612a</ApplicationID>
  <AccountNumber />
  <BillNumber>${data.balances.accountNum}</BillNumber>
  <StatementNumber />
  <BillingDate>${timestamp}</BillingDate>
  <DueDate>${timestamp}</DueDate>
  <TotalDue>${data.totalDue}</TotalDue>
  <DepartMentId>0</DepartMentId>
  <Fund>0</Fund>
  <PaymentDate>0001-01-01T00:00:00</PaymentDate>
  <Quantity>0</Quantity>
  <ItemAmount>0</ItemAmount>
  <TotalAmountdue>0</TotalAmountdue>
  <PartialPaymentFlag>false</PartialPaymentFlag>
  <ReceiptpresentFlag>false</ReceiptpresentFlag>
  <Details>
    <BillingStatementDetail>
      <ItemDate>${timestamp}</ItemDate>
      <ItemDescription>Real Estate Tax</ItemDescription>
      <Charges>${data.totalDue}</Charges>
      <Credits>0</Credits>
    </BillingStatementDetail>
  </Details>
  <Customers>
    <Customer>
      <FirstName>${data.balances.property.ownerName}</FirstName>
      <MiddleName />
      <LastName />
      <BillingAddress>
        <Address>
          <AddressLine1>${data.address.streetAddress}</AddressLine1>
          <City>PHILADELPHIA</City>
          <State>PA</State>
          <PostalCode>${data.address.zipCode}</PostalCode>
          <Country>US</Country>
        </Address>
      </BillingAddress>
    </Customer>
  </Customers>
</BillingStatement>
  `;

  return escapeHtml(xmlString);
};
