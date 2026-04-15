export interface Env {
  DB: D1Database;
  BUCKET: R2Bucket;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    // Example D1 Query
    // const { results } = await context.env.DB.prepare('SELECT * FROM user_packages WHERE user_id = ?').bind(1).all();

    return Response.json({
      success: true,
      data: {
        message: "Hello from Cloudflare Pages API using D1 and R2!",
        packages: []
      }
    });
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
};
