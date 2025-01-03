make sure postgres is installed and runnning 

check .env  for your db values

this is required schema

```sql
create table todos(
	id SERIAL primary key,
	task VARCHAR(255) not null,
	completed BOOLEAN default FALSE
);
```

start dev with - npm run dev