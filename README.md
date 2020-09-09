# Tred public website


##### Start application locally

Install:

```
npm install
```
Start:
```
npm run dev
```

##### Start a ticket

- Check out a new branch (name it vaguely related to the ticket)
- Do your work
- Commit & push
- Create a pull request to `development` branch

##### Deploy to DEMO

- Once your PR has been reviewed and necessary changes made, merge the PR.
- The pipeline will deploy the site to the DEMO environment.
- The DEMO site can then be viewed by others (design team).

##### Deploy to PROD
- Create a PR from `development` to `master`. Once reviewed, merge.
- This will then be deployed to the PROD environment.

##### NB
- There is currently no branch push/merge protection. Please make pull requests. DO NOT push/merge directly on `development` or `master` branches.
