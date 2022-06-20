interface Props {
  value: string | null;
  onClick: () => void;
}

const Square = ({ value, onClick }: Props) => (
  <button type="button" className="square" onClick={onClick}>
    {value}
  </button>
);

export default Square;
