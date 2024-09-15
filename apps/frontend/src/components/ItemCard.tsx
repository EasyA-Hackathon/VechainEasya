interface Props {
  name: string;
  condition: string;
  availability: string;
}

export const ItemCard: React.FC<Props> = ({
  name,
  condition,
  availability,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center">
        {/* Placeholder for Item Image */}
        <div className="bg-gray-200 w-16 h-16 rounded-lg mr-4" />
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">{condition}</p>
          <p className="text-sm text-gray-600">{availability}</p>
        </div>
      </div>
    </div>
  );
};
