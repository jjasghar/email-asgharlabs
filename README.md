# email-asgharlabs

This creates an epoch time email addy. (you shouldn't be using this)

## Running application

### Local Machine

Pre-Reqs:
- `node` installed (tested with > 8)

All you need to do is run `node app.js` and `curl localhost:8000`

### Docker container

Pre-Reqs:
- `docker` installed

Steps:
- `docker build -t email-asgharlabs .`
- `docker run -p 8000:8000 email-asgharlabs:latest`

## License & Authors

If you would like to see the detailed LICENCE click [here](./LICENCE).

- Author: JJ Asghar <awesome@ibm.com>

```text
Copyright:: 2019- IBM, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```




[here]: https://gist.github.com/azs06/1514845e739de3dd6803b4c7487e19b6
