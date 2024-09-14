test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  // check property 'updated_at'
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  // check property 'postgres_version'
  expect(responseBody.dependencies.database.version).toEqual("16.0");

  // check property 'max_connections'
  expect(responseBody.dependencies.database.max_connections).toEqual(100);

  // check property 'opened_connections'
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
