export default function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-poppins text-[36px] font-semibold text-gray-950">{value}</p>
      <p className="text-[18px] text-gray-700">{label}</p>
    </div>
  );
}
