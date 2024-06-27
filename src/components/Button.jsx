import { useTruex } from "../contexts/useTruex";

export default function Button({ text }) {
    const { loading } = useTruex();

    return (
        <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={loading}
        >
            {loading ? 'Loading...' : `${text}`}
        </button>
    )
}