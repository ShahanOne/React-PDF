function TableDataField(props) {
  return (
    <td className="text-md pb-2 border font-semibold border-slate-400 pl-2 pr-40">
      {props.field}
    </td>
  );
}

export default TableDataField;
