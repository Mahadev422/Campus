const RefreshPage = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <button
      onClick={handleRefresh}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
    >
      Refresh
    </button>
  );
};

export default RefreshPage;
