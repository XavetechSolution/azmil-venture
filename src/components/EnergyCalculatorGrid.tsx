import useAppContext from "@/src/hooks/useAppContext";

function EnergyCalculatorGrid() {
  const { state, dispatch } = useAppContext();
  const { appliances } = state;

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-6 text-zinc-800">
        Energy Consumption Calculator
      </h1>

      <div className="space-y-5">
        {appliances.map((appliance, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-4 md:grid-cols-4 items-center p-4 rounded-xl 
                bg-white shadow-md 
                hover:shadow-xl hover:-translate-y-1 
                transition duration-200"
          >
            {/* Name */}
            <div>
              {appliance.isEditable ? (
                <input
                  type="text"
                  value={appliance.name}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_APPLIANCE_NAME",
                      payload: { id: index, name: e.target.value },
                    })
                  }
                  className="w-full border border-zinc-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              ) : appliance?.variation ? (
                <select
                  value={appliance.name}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_APPLIANCE_VARIATION",
                      payload: { id: index, type: e.target.value },
                    })
                  }
                  className="w-full font-semibold rounded-lg p-2 text-sm border-zinc-300 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  {appliance.variation.map((c) => (
                    <option key={c.type} value={c.type}>
                      {c.type}
                    </option>
                  ))}
                </select>
              ) : (
                <p className="font-semibold text-zinc-800">{appliance.name}</p>
              )}
            </div>

            {/* Quantity */}
            <input
              type="number"
              placeholder="Qty"
              value={Number(appliance.quantity) <= 0 ? "" : appliance.quantity}
              onChange={(e) =>
                dispatch({
                  type: "SET_APPLIANCE_QUANTITY",
                  payload: { id: index, quantity: e.target.value },
                })
              }
              className="border border-zinc-300 font-semibold rounded-lg p-2 placeholder:text-zinc-400 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* Power */}
            {appliance.isEditable ? (
              <input
                type="number"
                placeholder="Power (W)"
                value={appliance.power}
                onChange={(e) =>
                  dispatch({
                    type: "SET_APPLIANCE_POWER",
                    payload: { id: index, power: e.target.value },
                  })
                }
                className="border border-zinc-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            ) : (
              <p className="text-zinc-600 text-sm">
                {Number(appliance.power)} W each
              </p>
            )}

            {/* Total */}
            <p className="font-semibold text-blue-600">
              {Number(appliance.power) * Number(appliance.quantity)} W
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EnergyCalculatorGrid;
