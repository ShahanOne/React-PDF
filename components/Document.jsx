import JsPDF from 'jspdf';
import Image from 'next/image';
import data from './data.json';
import TableDataField from './tableDataField';
import TableDataValue from './TableDataValue';
function Document() {
  const generatePDF = () => {
    const report = new JsPDF('landscape', 'pt', 'a3');
    report.html(document.querySelector('#document')).then(() => {
      report.save('report.pdf');
    });
  };

  return (
    <>
      <div className="flex lg:pl-0 font-poppins my-2 mx-4" id="document">
        <div className="mx-2">
          <center>
            <div className="imgDiv mb-4 w-full">
              <img
                className="w-60 h-52"
                src={data.buildingImage}
                alt="property-img"
              />
              <p className="font-bold m-0">{data.buildingName}</p>
            </div>
          </center>

          <table className="">
            <caption className="border border-slate-400 border-b-0 pb-2">
              <b>Project Details</b>
            </caption>
            <tbody>
              <tr>
                <TableDataField field="Land" />
                <TableDataValue value={data.projectDetails.land} />
              </tr>
              <tr>
                <TableDataField field="No of Floors" />

                <TableDataValue value={data.projectDetails.floorsNumber} />
              </tr>
              <tr>
                <TableDataField field="Typical Floor Size" />

                <TableDataValue value={data.projectDetails.floorSize} />
              </tr>
              <tr>
                <TableDataField field="Status on OC" />

                <TableDataValue value={data.projectDetails.ocStatus} />
              </tr>
              <tr>
                <TableDataField field="Building Completion" />

                <TableDataValue
                  value={data.projectDetails.buildingCompletion}
                />
              </tr>
              <tr>
                <TableDataField field="Designated Usage" />

                <TableDataValue value={data.projectDetails.designatedUsage} />
              </tr>
              <tr>
                <TableDataField field="Area Offerred" />

                <TableDataValue value={data.projectDetails.areaOfferred} />
              </tr>
              <tr>
                <TableDataField field="Built-up Area" />

                <TableDataValue value={data.projectDetails.builtArea} />
              </tr>
              <tr>
                <TableDataField field="Tenant" />

                <TableDataValue value={data.projectDetails.tenant} />
              </tr>
              <tr>
                <TableDataField field="Floor" />

                <TableDataValue value={data.projectDetails.floor} />
              </tr>
              <tr>
                <TableDataField field="Nature of Transaction" />

                <TableDataValue value={data.projectDetails.transactionNature} />
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ml-[2%]">
          <div className="imgDiv">
            <img className="mb-2 w-44 h-16" src={'/returns.png'} />
          </div>

          <table className="">
            <caption className="border border-slate-400 border-b-0 pb-2">
              <b>Proposed Commercial Terms</b>
            </caption>
            <tbody>
              <tr>
                <TableDataField field="Gross License Fee/ Rent(INR/Sq.ft/Month)" />
                <TableDataValue
                  value={data.proposedCommercialTerms.grossLicenseFee}
                />
              </tr>
              <tr>
                <TableDataField field="Deductions(INR/Sq.ft/Month)" />

                <TableDataValue
                  value={data.proposedCommercialTerms.deductions}
                />
              </tr>
              <tr>
                <TableDataField field="Net License Fee(INR/Sq.ft/Month)" />

                <TableDataValue
                  value={data.proposedCommercialTerms.netLicenseFee}
                />
              </tr>
              <tr>
                <TableDataField field="Quoted Sale Price(INR/Sq.ft)" />

                <TableDataValue
                  value={data.proposedCommercialTerms.quotedSalePrice}
                />
              </tr>
              <tr>
                <TableDataField field="Stamp Duty & Registration(INR/Sq.ft)" />

                <TableDataValue
                  value={data.proposedCommercialTerms.stampDutyAndRegistration}
                />
              </tr>
              <tr>
                <TableDataField field="Any Other Applicable Charges-(Corpus)" />

                <TableDataValue
                  value={data.proposedCommercialTerms.otherCharges}
                />
              </tr>
              <tr>
                <TableDataField field="Total Cost" />

                <TableDataValue
                  value={data.proposedCommercialTerms.totalCost}
                />
              </tr>
              <tr>
                <TableDataField field="Deposit Amount" />

                <TableDataValue
                  value={data.proposedCommercialTerms.depositAmount}
                />
              </tr>
              <tr>
                <TableDataField field="Net Investment(Less Deposit)" />

                <TableDataValue
                  value={data.proposedCommercialTerms.netInvestment}
                />
              </tr>
              <tr>
                <TableDataField field="Total Cost of Property(in Crores)" />

                <TableDataValue
                  value={data.proposedCommercialTerms.propertyTotalCost}
                />
              </tr>
              <tr>
                <TableDataField field="Entry Yield" />

                <TableDataValue
                  value={data.proposedCommercialTerms.entryYield}
                />
              </tr>
              <tr>
                <TableDataField field="Average Yield" />

                <TableDataValue
                  value={data.proposedCommercialTerms.averageYield}
                />
              </tr>
              <tr>
                <TableDataField field="License/ Lease Term" />

                <TableDataValue
                  value={data.proposedCommercialTerms.leaseTerm}
                />
              </tr>
              <tr>
                <TableDataField field="Tenants Lock-in" />

                <TableDataValue
                  value={data.proposedCommercialTerms.tenantsLockIn}
                />
              </tr>
              <tr>
                <TableDataField field="Rent Commencement" />

                <TableDataValue
                  value={data.proposedCommercialTerms.rentCommencement}
                />
              </tr>
              <tr>
                <TableDataField field="Escalation in Rent" />

                <TableDataValue
                  value={data.proposedCommercialTerms.escalationinRent}
                />
              </tr>
              <tr>
                <TableDataField field="No of Car Parks" />
                <TableDataValue
                  value={data.proposedCommercialTerms.numberOfCarParks}
                />
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <center>
        <button
          className=" bg-sky-600 rounded p-4 text-white"
          onClick={generatePDF}
        >
          Export Pdf
        </button>
      </center>
    </>
  );
}

export default Document;
