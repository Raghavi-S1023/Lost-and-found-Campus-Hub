import claims from "../data/claims";

const statusColor = {
  Pending: "bg-yellow-500",
  Approved: "bg-green-500",
  Rejected: "bg-red-500",
};

const MyClaims = () => {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-2">
        My Claims
      </h1>

      <p className="text-gray-400 mb-8">
        Track the status of your submitted claims.
      </p>

      <div className="space-y-5">

        {claims.map((claim) => (

          <div
            key={claim.id}
            className="bg-slate-900 rounded-xl p-6 flex justify-between items-center"
          >

            <div>

              <h2 className="text-xl font-semibold">
                {claim.item}
              </h2>

              <p className="text-gray-400">
                Owner: {claim.owner}
              </p>

              <p className="text-gray-400">
                Date: {claim.date}
              </p>

            </div>

            <span
              className={`${statusColor[claim.status]} px-4 py-2 rounded-full`}
            >
              {claim.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default MyClaims;
