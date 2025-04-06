/*
 // list running containers 
  ==> docker ps

// list all containers, running or not
==> docker ps --all

note: run == create + start
-a flag (attach) watch for output coming from the container and print to terminal

 // removing stopped containers
 ==> docker system prune

 // Retrieving log outputs
 ==> docker logs <CONTAINER_ID>
 // Need to create, start then log
 // example docker create busybox echo hi there, then
 // docker start <BUSYBOX_ID>
 // docker logs <BUSYBOX_ID>

 // stopping containers
 // docker stop <CONTAINER_ID>    // stop  --> sigterm (gives cleanup time), kills if unsuccesful
 // docker kill <CONTAINER_ID>    // kill  --> sigkill (to time to cleanup)

 // Multi-command containers ex redis container and redis-cli
 // Executing commands in running containers (run container interactively)
 ==> docker exec -it redis-cli
 ==> docker exec -it <container_id> sh // will start shell inside the container 
 // Port mapping
  // vite react app requires following additional configuration
  export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173, // you can replace this port with any port
  }

  use ==> docker-compose up --build to build and run multiple containers
  volume mapping
  ==> docker run -v /app/node_modules -v $(pwd):/app <image_id>

  docker build -f Dockerfile.dev . // will build using the supplied Dockerfile

  ==> docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id> will tell docker to use node_modules in the working directory

  ==> docker exec -it <container_id> npm run test for live re-loading tests

*/
