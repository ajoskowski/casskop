// +build !ignore_autogenerated

// This file was autogenerated by openapi-gen. Do not edit it manually!

package v1alpha1

import (
	common "k8s.io/kube-openapi/pkg/common"
	spec "k8s.io/kube-openapi/pkg/validation/spec"
)

func GetOpenAPIDefinitions(ref common.ReferenceCallback) map[string]common.OpenAPIDefinition {
	return map[string]common.OpenAPIDefinition{
		"./pkg/apis/db/v1alpha1.CassandraBackup":       schema_pkg_apis_db_v1alpha1_CassandraBackup(ref),
		"./pkg/apis/db/v1alpha1.CassandraBackupSpec":   schema_pkg_apis_db_v1alpha1_CassandraBackupSpec(ref),
		"./pkg/apis/db/v1alpha1.CassandraBackupStatus": schema_pkg_apis_db_v1alpha1_CassandraBackupStatus(ref),
		"./pkg/apis/db/v1alpha1.CassandraCluster":      schema_pkg_apis_db_v1alpha1_CassandraCluster(ref),
	}
}

func schema_pkg_apis_db_v1alpha1_CassandraBackup(ref common.ReferenceCallback) common.OpenAPIDefinition {
	return common.OpenAPIDefinition{
		Schema: spec.Schema{
			SchemaProps: spec.SchemaProps{
				Description: "CassandraBackup is the Schema for the cassandrabackups API",
				Type:        []string{"object"},
				Properties: map[string]spec.Schema{
					"kind": {
						SchemaProps: spec.SchemaProps{
							Description: "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
							Type:        []string{"string"},
							Format:      "",
						},
					},
					"apiVersion": {
						SchemaProps: spec.SchemaProps{
							Description: "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
							Type:        []string{"string"},
							Format:      "",
						},
					},
					"metadata": {
						SchemaProps: spec.SchemaProps{
							Ref: ref("k8s.io/apimachinery/pkg/apis/meta/v1.ObjectMeta"),
						},
					},
					"spec": {
						SchemaProps: spec.SchemaProps{
							Ref: ref("./pkg/apis/db/v1alpha1.CassandraBackupSpec"),
						},
					},
					"status": {
						VendorExtensible: spec.VendorExtensible{
							Extensions: spec.Extensions{
								"x-kubernetes-list-type": "",
							},
						},
						SchemaProps: spec.SchemaProps{
							Ref: ref("./pkg/apis/db/v1alpha1.CassandraBackupStatus"),
						},
					},
				},
				Required: []string{"spec"},
			},
		},
		Dependencies: []string{
			"./pkg/apis/db/v1alpha1.CassandraBackupSpec", "./pkg/apis/db/v1alpha1.CassandraBackupStatus", "k8s.io/apimachinery/pkg/apis/meta/v1.ObjectMeta"},
	}
}

func schema_pkg_apis_db_v1alpha1_CassandraBackupSpec(ref common.ReferenceCallback) common.OpenAPIDefinition {
	return common.OpenAPIDefinition{
		Schema: spec.Schema{
			SchemaProps: spec.SchemaProps{
				Description: "CassandraBackupSpec defines the desired state of CassandraBackup",
				Type:        []string{"object"},
				Properties: map[string]spec.Schema{
					"cassandraCluster": {
						SchemaProps: spec.SchemaProps{
							Type:   []string{"string"},
							Format: "",
						},
					},
					"datacenter": {
						SchemaProps: spec.SchemaProps{
							Description: "Cassandra DC name to back up. Used to find the pods in the CassandraCluster",
							Type:        []string{"string"},
							Format:      "",
						},
					},
					"storageLocation": {
						SchemaProps: spec.SchemaProps{
							Description: "The uri for the backup target location e.g. s3 bucket, filepath",
							Type:        []string{"string"},
							Format:      "",
						},
					},
					"schedule": {
						SchemaProps: spec.SchemaProps{
							Description: "The snapshot tag for the backup",
							Type:        []string{"string"},
							Format:      "",
						},
					},
					"snapshotTag": {
						SchemaProps: spec.SchemaProps{
							Type:   []string{"string"},
							Format: "",
						},
					},
					"duration": {
						SchemaProps: spec.SchemaProps{
							Type:   []string{"string"},
							Format: "",
						},
					},
					"bandwidth": {
						SchemaProps: spec.SchemaProps{
							Type:   []string{"string"},
							Format: "",
						},
					},
					"concurrentConnections": {
						SchemaProps: spec.SchemaProps{
							Type:   []string{"integer"},
							Format: "int32",
						},
					},
					"entities": {
						SchemaProps: spec.SchemaProps{
							Type:   []string{"string"},
							Format: "",
						},
					},
					"secret": {
						SchemaProps: spec.SchemaProps{
							Type:   []string{"string"},
							Format: "",
						},
					},
				},
				Required: []string{"cassandraCluster", "datacenter", "storageLocation", "snapshotTag"},
			},
		},
	}
}

func schema_pkg_apis_db_v1alpha1_CassandraBackupStatus(ref common.ReferenceCallback) common.OpenAPIDefinition {
	return common.OpenAPIDefinition{
		Schema: spec.Schema{
			SchemaProps: spec.SchemaProps{
				Description: "CassandraBackupStatus defines the observed state of CassandraBackup",
				Type:        []string{"object"},
				Properties: map[string]spec.Schema{
					"node": {
						SchemaProps: spec.SchemaProps{
							Description: "name of pod / node",
							Type:        []string{"string"},
							Format:      "",
						},
					},
					"state": {
						SchemaProps: spec.SchemaProps{
							Description: "State shows the status of the operation",
							Type:        []string{"string"},
							Format:      "",
						},
					},
					"progress": {
						SchemaProps: spec.SchemaProps{
							Description: "Progress shows the percentage of the operation done",
							Type:        []string{"string"},
							Format:      "",
						},
					},
				},
				Required: []string{"node", "state", "progress"},
			},
		},
	}
}

func schema_pkg_apis_db_v1alpha1_CassandraCluster(ref common.ReferenceCallback) common.OpenAPIDefinition {
	return common.OpenAPIDefinition{
		Schema: spec.Schema{
			SchemaProps: spec.SchemaProps{
				Description: "CassandraCluster is the Schema for the cassandraclusters API",
				Type:        []string{"object"},
				Properties: map[string]spec.Schema{
					"kind": {
						SchemaProps: spec.SchemaProps{
							Description: "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
							Type:        []string{"string"},
							Format:      "",
						},
					},
					"apiVersion": {
						SchemaProps: spec.SchemaProps{
							Description: "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
							Type:        []string{"string"},
							Format:      "",
						},
					},
					"metadata": {
						SchemaProps: spec.SchemaProps{
							Ref: ref("k8s.io/apimachinery/pkg/apis/meta/v1.ObjectMeta"),
						},
					},
					"spec": {
						SchemaProps: spec.SchemaProps{
							Ref: ref("./pkg/apis/db/v1alpha1.CassandraClusterSpec"),
						},
					},
					"status": {
						SchemaProps: spec.SchemaProps{
							Ref: ref("./pkg/apis/db/v1alpha1.CassandraClusterStatus"),
						},
					},
				},
			},
		},
		Dependencies: []string{
			"./pkg/apis/db/v1alpha1.CassandraClusterSpec", "./pkg/apis/db/v1alpha1.CassandraClusterStatus", "k8s.io/apimachinery/pkg/apis/meta/v1.ObjectMeta"},
	}
}