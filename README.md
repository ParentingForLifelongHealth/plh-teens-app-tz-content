# plh-teens-app-tz-content
This package contains data used in the PLH Teens Tanzania ParentApp.

## App Preview
Testing: https://plh-teens-tz-uat.web.app

Production: https://plh-teens-tz-preview.web.app

RCT+ (no longer receiving updates): https://plh-teens-tz.web.app

## Uploading remote assets

To bulk upload remote assets to Firebase, run 

```
gcloud auth login
```
```
gcloud config set project plh-teens-tz-13ff8
```
```
gcloud storage cp -r .idems_app/deployments/plh_teens_tz/app_data/remote_assets gs://plh-teens-tz-13ff8.firebasestorage.app
```
