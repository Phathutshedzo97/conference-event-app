import { Link } from "react-router-dom";

const EventCard = ({ event, hasEdit , handleDelete}) => {
  const onDelete = (id) => {
    handleDelete(id)
  }

  return (
    <div key={event._id} className="border p-4 rounded">
      <div className="flex justify-between items-center gap-3">
        <h2 className="text-xl font-semibold">{event.name}</h2>
        <p>{event.date.toLocaleString()}</p>
      </div>
      <div className="flex gap-2 items-center text-sm text-blue-gray-500 mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-map-pin"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <p>{event.location}</p>
      </div>
      {hasEdit ? (
        <>
          <Link
            to={`/dashboard/events/edit/${event._id}`}
          >
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-5">
              Edit
            </button>
          </Link>
          <button onClick={() => onDelete(event._id)}  className="bg-red-500 text-white px-4 py-2 rounded w-full mt-2">
            Delete
          </button>
        </>
      ) : (
        <Link to={`/events/${event._id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-5">
            View Details
          </button>
        </Link>
      )}
    </div>
  );
};

export default EventCard;
